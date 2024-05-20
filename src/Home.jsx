

export function Home(){
    return(
        <>
           <link rel="stylesheet" href="/CSS/Home.css" />

           <h1 className="heading">"Despite everything, it's still you..."</h1> 

            <br />
            <br />

           <div className="presentation">
                <img src="/Pictures/thumbnail_26388.jpg" className="presentation" />
                
                <p className="presentation">
                    Hello, Hola. I am Angel Vazquez. Software Engineer and Graphic Designer.
                    My work is mainly based on Back-end Web Development, Low-Level Programming and Graphic Design with
                    PhotoShop. Feel welcome to explore this web place to see example of previous jobs, references,
                    and more about my professional career.
                </p>

                <div className="line">
                    <hr className="presentation"/>
                </div>
                
           </div>

            <div className="quick">
                <h1 className="quick">Quick Links</h1>  

                <a href="/Pictures/Resume.pdf" download="/Pictures/Resume.pdf">
                    <p className="quick"><u>Resume</u></p>
                </a>
                <p className="quick"><u>Github</u></p>
                <p className="quick"><u>Email</u></p>
            </div> 
           
        </>
    )
}