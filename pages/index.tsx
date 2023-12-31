import type { NextPage } from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { useEffect, useState } from 'react';
import PaginationOutlined from 'dh-marvel/components/Pagination';
import ResponsiveGrid from 'dh-marvel/components/Grid';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';

const INITIAL_OFFSET = 0
const INITIAL_LIMIT = 12

export async function getServerSideProps() {
    const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
    return {
        props: {
            initialComics: response.data.results,
            limit: response.data.count,
            initialTotal: response.data.total
        },
    };
}

type indexProps = {
    initialComics: any;
    initialTotal: number,
}

const Index: NextPage<indexProps> = ({ initialComics, initialTotal }) => {
    const [comics, setComics] = useState(initialComics)
    const [page, setPage] = useState(1);
    const [total, settotal] = useState(initialTotal);
    const LIMIT = 12

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    async function deleteCookie() {
        await fetch(`/api/cookie`)
    }

    useEffect(() => {
        let offset = LIMIT * (page - 1)
        getComics(offset, LIMIT).then(response => {
            setComics(response?.data?.results)
            settotal(response?.data?.total)
        })

        deleteCookie()
        localStorage.clear();
    }, [page])

    return (
        <>
            <LayoutGeneral>
                <Head>
                    <title> MARVEL 2023 </title>
                    <meta name="description" content="web site marvel" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <BodySingle title={"🦸‍♂️⚡️!!WELCOME TO THE MARVEL STORE!! 🎉👸🏻"}>
                    <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
                    <ResponsiveGrid data={comics} />
                    <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
                </BodySingle>
            </LayoutGeneral>
        </>
    )
}

export default Index
