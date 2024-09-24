const Terms = ({modal, setModal}) => {
    return (
        <div className={`${modal ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms &amp; Conditions
                        </h3>
                        <button 
                            type="button" 
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={()=>setModal(false)}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <ol className="text-base leading-relaxed text-gray-500 dark:text-gray-400 list-decimal ml-5">
                            <li>No purchase is necessary to enter our giveaways. </li>
                            <li>Acceptance of Giveaway Terms and Conditions: By entering the giveaway you agree to be bound by these Terms and Conditions. If you object to or do not agree with any of these Terms and Conditions, please do not enter the giveaway.</li>
                            <li>Method of entry: To enter, follow the directions for entry as listed in the promotional landing page post.  You can only enter once per contest unless specified otherwise and multiple entries made with additional accounts held by one person will be disqualified. </li>
                            <li>Who can enter? You must provide a valid shipping address. We ship only to the UK unless we specify otherwise in the contest. If you enter or win and you are outside of the specified shipping area, you will be disqualified and a new winner chosen.</li>
                            <li>Prizes: The prize awarded will be as is specifically described in the contest notification.</li>
                            <li>Method of winner determination: All drawings are random unless specified otherwise.  If a drawing is not random, the method of determining the winner will be specified in the contest listing.</li>
                            <li>Dates of giveaway: Time period for entering giveaway is clearly listed in the promotional landing page.</li>
                            <li>Notification and response: Winners will be notified by email and announced on social media. The Winner must respond by email within three (3) calendar days of the winner announcement and provide a valid shipping address.  If the winner has not responded by that time, a new winner will be selected.</li>

                            <li>Disqualification. We reserve the right to remove entries which are believed to be fraudulent or invalid. Disqualification may result from:</li>
                            <ol className="list-disc list-inside">
                                <li>The failure of a potential winner to respond to email notification within three (3) calendar days after the announcement of winning the giveaway</li>
                                <li>The return of the winning email announcement as undeliverable</li>
                                <li>The return of any communication or prize as undeliverable</li>
                                <li>Non-compliance with the directions for method of entry</li>
                                <li>Other non-compliance with the Terms and Conditions</li>
                            </ol>
                            <li>Privacy: We respect your privacy and do not sell contact information to any other company.  We may use the winner’s name and prize information, for promotional purposes in any media without further payment or consideration. We may send entrants notification of future contests via email.  You may unsubscribe from these email notifications at any time. Certain prizes are provided by third parties and sponsors not owned by The Pure Feed Company or any subsidiaries.</li>

                            <li>Prize delivery: Please allow 1-2 weeks for your prize to arrive. If you haven’t received your prize and it has been at least 10 business days since the winner was announced, contact SCV Distribution for more information.</li>
                        </ol>
                    </div>
                    <div className="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button 
                            type="button" 
                            onClick={() => setModal(false)}
                            className="text-white bg-isotek hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms
