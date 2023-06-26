import React from "react";
import Head from 'next/head';
import { FaqsType } from "../../components/faqs/faqsData";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import SinpleAccordion from "dh-marvel/components/Accordions/SinpleAccordion";


export const getStaticPops = async () => {
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
                <title>Preguntas frecuentes | DH MARVEL</title>
                <meta name="description" content="Preguntas frecuentes sobre DH MARVEL" />
            </Head>
            <LayoutGeneral>
                <BodySingle title='Preguntas frecuentes'>
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
            </LayoutGeneral >
        </>
    )
}

export default Faq