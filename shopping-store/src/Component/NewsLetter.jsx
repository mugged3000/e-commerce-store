const NewsLetterSection = () => {
    return (
      <section className="py-5 newletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 text-center">
              <h2 className="mb-3 join">Join Our NewsLetter</h2>
              <p className="mb-4" style={{fontSize:"19px",fontFamily: "Arial, sans-serif"}}>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
  
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" />
               
              </div>
              <button className="btn btn-dark w-100">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default NewsLetterSection;