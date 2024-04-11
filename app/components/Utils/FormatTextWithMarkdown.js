

const FormatTextWithMarkdown = (
    { data }
) => {
    let codeblock = false
    return data.map((line, _key) => {

        if (line.startsWith("###")){
            line = line.split("###")[1]
            return (
                <h2 className="text-lg uppercase font-bold font-modica leading-10">{line}</h2>
            )
        }
        if (line.startsWith("##")){
            line = line.split("##")[1]
            return (
                <h2 className="text-xl uppercase font-bold font-modica leading-10">{line}</h2>
            )
        }
        if (line.startsWith("#")){
            line = line.split("#")[1]
            return (
                <h2 className="text-4xl uppercase font-black font-Lapis leading-10">{line}</h2>
            )
        }
        if (line == ""){
            return (
                <p className="py-5"></p>
            )
        }

        if (line.includes("<strong>")){
            let beforebreak = line.split("<strong>")[0]
            let strongtext_unfinished = line.split("<strong>")[1]
            let afterbreak = line.split("</strong>")[1]
            let strongtext = strongtext_unfinished.split("</strong>")[0]

            return (
                <p className="">{beforebreak}<span class="font-bold">{strongtext}</span>{afterbreak}</p>
            )
        }

        if (line.includes("<mail>")){
            let beforebreak = line.split("<mail>")[0]
            let strongtext_unfinished = line.split("<mail>")[1]
            let afterbreak = line.split("</mail>")[1]
            let strongtext = strongtext_unfinished.split("</mail>")[0]

            return (
                <p>{beforebreak}<a href={`mailto:${strongtext}`} className="text-lightpink hover:text-lightpink/80">{strongtext}</a>{afterbreak}</p>
            )
        }

        if (line.includes("<site>")){
            let beforebreak = line.split("<site>")[0]
            let strongtext_unfinished = line.split("<site>")[1]
            let afterbreak = line.split("</site>")[1]
            let strongtext = strongtext_unfinished.split("</site>")[0]


            return (
                <p>{beforebreak}<a href={`${strongtext}`} className="text-lightpink hover:text-lightpink/80">{strongtext}</a>{afterbreak}</p>
            )
        }

        else {
            let classes = "py-2 font-body transition-all md:text-base text-sm leading-10"
            return (<p className={classes}>{line}</p>)
        }
        
    });
    
}

export default FormatTextWithMarkdown