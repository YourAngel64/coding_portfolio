export function Work(){
    return(
        <>
            <link rel="stylesheet" href="/CSS/Work.css" />

            {/* 
                Coding
                Graphic Design
                Webpages

            */}

            <br />
            <br />
            <br />
            <br />

            <a href="work/coding">
                <div className="works">
                    <h2 className="headings"><u>Coding</u></h2>
                    <img src="/Pictures/coding.jpg" className="works"/>
                </div>
            </a>
            
            <br />
            <br />
            <br />
            <br />

            <a href="work/gd">
                <div className="works">
                    <h2 className="headings"><u>Graphic Design</u></h2>
                    <img src="/Pictures/ps.png" className="works"/>
                </div>
            </a>

            <br />
            <br />
            <br />

            <a href="work/webpage">
                <div className="works">
                    <h2 className="headings"><u>Webpages</u></h2>
                    <img src="/Pictures/web_example.png" className="works"/>
                </div>
            </a>


            
        </>
    )
}