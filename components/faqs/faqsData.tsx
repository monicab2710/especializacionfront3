export type FaqsType = {
    id: number,
    question: string,
    answer: string,
}

export const faqsData: FaqsType[] = [
    {
        "id": 1,
        "question": "How many comics do you have?",
        "answer": "We currently have the entire Marvel collection available. Some issues may have limited or no availability at the moment. For more information, you can visit https://marvel.com."
        },
        {
        "id": 2,
        "question": "Can I pre-order new releases?",
        "answer": "Unfortunately, our website does not yet accept pre-orders. However, we are working on adding that functionality. Follow our Twitter to stay updated on the latest news."
        },
        {
        "id": 3,
        "question": "How long do deliveries take?",
        "answer": "All our deliveries are sent through DH-Express, which reaches the entire country within 24 hours."
        },
        {
        "id": 4,
        "question": "What payment methods are available?",
        "answer": "We only accept Visa and Mastercard credit cards. At the moment, we do not accept cash or other payment methods."
        },
        {
        "id": 5,
        "question": "Do you accept returns?",
        "answer": "We accept returns for our purchases as long as the comic is in its original packaging, as otherwise, they lose their resale value. If you wish to return it and it is in the same condition as when it was sent, please contact 11-5555-0001 to arrange the return."
        }
           
        
]