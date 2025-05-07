function AboutPage(){
    return (
        <div>
        <NavBar></NavBar>
        <div>
          <div>
            <Lottie animationData={doggyAnimation} loop={true} />
          </div>
          <p>the creation of this app was inspired by my dog. i thought that
             it would be nice if i could have a space to store our moments together with/of her, so that when she passes, i will have a repositary of memories that i can look back on. this is also my first project for me to practice my SWE skills</p>
        </div>
      </div>
    )
}

export default AboutPage