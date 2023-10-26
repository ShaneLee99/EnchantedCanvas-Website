
const PopupWidget = ({
    Title,
    Description
}) => {

    const renderPopup = () => {
        if (Title && Description) {
            return (
                <div className='shadow-lg fixed bottom-10 right-10 pl-1 rounded-lg w-96 h-20 bg-gradient-to-b from-grad-pink via-grad-yellow to-grad-blue'>
                    <div className='rounded-lg bg-gray-light w-full h-full p-4 pl-8 font-poppins'>
                        <h2 className='font-bold text-lg tracking-wider'>{Title}</h2>
                        <p className='tracking-wide'>{Description}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };

    return renderPopup();
};

export default PopupWidget;