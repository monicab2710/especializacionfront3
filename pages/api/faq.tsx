import React from "react";
import { faqsData } from "../../components/faqs/faqsData"
import { FaqsType } from "../../components/faqs/faqsData";
import Accordions from "../../components/Accordions/accordions"

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
        <div>
            {data.map(faq => {
                return (
                    < Accordions
                        key={faq.id}
                        id={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                    />
                )
            })}

        </div >

    )
}

export default Faq