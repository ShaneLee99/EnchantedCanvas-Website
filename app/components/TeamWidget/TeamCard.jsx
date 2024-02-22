
const TeamCard = ({
       Name,
       Picture,
       JobTitle,
       Description,
       Socials
}) => {
    return (
        <div className='w-full shadow-xl bg-gray-mid rounded-2xl from-grad-pink via-grad-purple to-grad-blue p-2 mx-auto'>
          <div className='w-full h-full rounded-2xl shadow-sm bg-purple-light items-center p-8 flex flex-col space-y-5'>

            <div className='w-32 h-32 rounded-full bg-gradient-to-tl p-1 from-grad-pink via-grad-purple to-grad-white overflow-hidden'>
              <div className='flex rounded-full overflow-hidden bg-purple-dark p-1'>
                <div className='flex rounded-full overflow-hidden bg-purple-dark'>
                  <img width="128px" height="128px" alt={`picture of ${Name}`} src={Picture}></img>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <div className='flex flex-col items-center font-poppins'>
                <h1 className='text-center font-light tracking-wide text-lg'>{Name}</h1>
                <h1 className='text-center font-bold text-xl tracking-widest leading-relaxed bg-gradient-to-r p-1 from-grad-pink via-grad-yellow to-grad-blue text-transparent bg-clip-text'>{JobTitle}</h1>
                <p className='text-center text-sm mt-2'>{Description}</p>
              </div>
            </div>

            <div className='flex-grow'></div>

            <div className='w-full space-x-3 h-[1.5em] mt-7 flex items-center justify-center'>
                {Socials?.Mail ?
                <svg className='text-off-white' xmlns="http://www.w3.org/2000/svg" fill='Currentcolor' stroke='Currentcolor' height="1.5em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                :null}
                {Socials?.X ?
                <svg className='text-off-white' xmlns="http://www.w3.org/2000/svg" fill='Currentcolor' stroke='Currentcolor' height="1.5em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                :null}
            </div>

          </div>
        </div>
    );
};

export default TeamCard;