export const Contact =()=>{

   const handleFormSubmit = (formData)=>{
    

    const  formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
   };

  
 return (

        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

           <div className="contact-wrapper container">
              <form action={handleFormSubmit}>
                <input type="text" required autoComplete="false"
                placeholder="Enter your name" name="username" 
                className="form-control"/>

                <input type="email" required autoComplete="false"
                placeholder="Enter your email" name="email" />

                <textarea className="form-control" 
                rows="10"
                placeholder="Enter your message"
                name="message"
                required
                autoComplete="false"></textarea>

                <button type="submit" value="send">send</button>
             </form>
                </div>

        </section>
    );
};