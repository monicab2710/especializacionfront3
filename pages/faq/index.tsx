import React from "react";
import Head from 'next/head';
import { FaqsType } from "../../components/faqs/faqsData";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import SinpleAccordion from "dh-marvel/components/Accordions/SinpleAccordion";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";


export const getStaticProps = async () => {
    const resp = await fetch("https://my-marvel-store.vercel.app/api/faq");
    const data: FaqsType[] = await resp.json();

    return {
        props: {
            data
        }
    };

};


interface Props {
    data: FaqsType[];
}

const Faq: React.FC<Props> = ({ data }) => {
    return (
        <>
            <Head>
                <title> Frequently Asked QuestionsMARVEL</title>
                <meta name="description" content="Frequently Asked Questions DH MARVEL" />
            </Head>
            <LayoutGeneral>

                <BodySingle title='Frequently Asked Questions'>
                    {data.map(faq => {
                        return (
                            <SinpleAccordion
                                key={faq.id}
                                id={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        )
                    })}
                </BodySingle>
            </LayoutGeneral>
        </>
    )
}

export default Faq