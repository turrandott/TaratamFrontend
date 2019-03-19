import React, {useState}  from 'react';  /* react hooks*/
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


import {createWish, createUser} from './api';


export default function MainPage() {
  const [wish, setWish]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const sendWishData=async (event)=>{ /*anonymous arrow func mdn*/
    event.preventDefault();
    console.log(wish);
    console.log(email);
    await createWish(wish, email);
  }
  const sendUserData=async (event)=>{ /*anonymous arrow func mdn*/
    event.preventDefault();
    console.log(email);
    console.log(password);
    await createUser(email, password);
  }
  return <>

    {/* <!-- Navigation --> */}
    {/* <Navbar fixed="top" expand="lg"> */}
    <Navbar expand="lg">
      <Navbar.Brand href="#home">TARATAM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="globalpeace.html">Global peace</Nav.Link>
          <Nav.Link href="#makewish">Make a wish</Nav.Link>
          <Nav.Link href="#realizewish">Realize a wish</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/* <!-- End Navigation --> */}

{/*<Jumbotron>*/}
<Form onSubmit={sendUserData}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(event)=>{setEmail(event.target.value)}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Create account
  </Button>
</Form>

    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    {/*</Jumbotron>*/}


    {/* <!-- Header --> */}
    <Jumbotron id="home">
      <div class="mt-5">
        <div className="banner-text text-center">
          <h1>DO YOU HAVE A WISH?</h1>
        </div>
      </div>

      <div class="container p-3">
        <div class="row justify-content-center">
          <div class="m-2">
            <Button href="#globalpeace" variant="success" size="lg">Yes</Button>
          </div>
          <div class="m-2">
            <Button href="#realizewish" variant="primary" size="lg">No</Button>
          </div>
        </div>
      </div>

      <div class="p-3">
        <p>
          <span>TARATAM is a WISH REALIZER.</span> Like Aladdin's lamp it is a tool that can be used to express a wish and realize it. It differs from the lamp in that it is more modern (uses the internet); there is no limit to the number of wishes (Aladdin only had three) and the genie of the lamp is the community of Human Beings on planet Earth, like me and you here now.
        </p>
      </div>
    </Jumbotron>
    {/* <!-- End Header --> */}

    {/* <!-- Global Peace --> */}
    <Jumbotron id="globalpeace">
      <div class="mt-3">
        <div className="banner-text text-center">
          <h1>DO YOU WISH FOR GLOBAL PEACE?</h1>
        </div>
      </div>

      <Container>
        <Row>
          <Col>
            <div class="container p-3">
              <div class="row justify-content-center">
                <div class="m-2">
                  <Button href="#globalpeace" variant="success" size="lg">Yes</Button>
                </div>
                <div class="m-2">
                  <Button href="#realizewish" variant="primary" size="lg">I have another wish</Button>
                </div>
              </div>
            </div>
            <p>Global Peace looks like something far away because we feel separated and not conditioned to express basic wishes of the Human Community.</p>
            <p>Try to do it now. If you have already expressed your wish for Global Peace and/or you have another wish you would like to realize, you may ask Taratam now</p>

          </Col>

          <Col>
            <div className="embed-responsive embed-responsive-4by3">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/44sxrUg7J_Q?rel=0&amp;showinfo=0" allowFullScreen></iframe>
            </div>
          </Col>
        </Row>
      </Container>



    </Jumbotron>





    <div id="globalpeace" className="globalpeace">
      <div className="container">
        <div className="banner-text text-center">
          <h1>DO YOU WISH FOR GLOBAL PEACE?</h1>
        </div>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <a href="globalpeace.html" className="btn btn-lg btn-warning active" role="button">Yes</a>
              <a href="#makewish" className="btn btn-lg btn-primary" role="button">I have another wish</a>
                <p>Global Peace looks like something far away because we feel separated and not conditioned to express basic wishes of the Human Community.</p>
                <p>Try to do it now. If you have already expressed your wish for Global Peace and/or you have another wish you would like to realize, you may ask Taratam now</p>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="embed-responsive embed-responsive-4by3">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/44sxrUg7J_Q?rel=0&amp;showinfo=0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
      </div>

    </div>
    {/* <!-- End Global Peace --> */}

    {/* <!-- Make a Wish --> */}
    <div id="makewish" className="makewish">
      <div className="container">
        <h2>MAKE A WISH</h2>
        <p>Here is an explanation of how to make and realize wishes using TARATAM</p>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="packages">
              {/* <!-- <i className="fa fa-desktop" aria-hidden="true"></i> --> */}
              <h4>1. IMAGINE</h4>
              <p>Close your eyes and just imagine your wish realized.</p>
              <p>How will it be.</p>
              <p>How do you feel about it.</p>
              <p>This process is important to discover your intention concerning the wish. Do you really care about it. Than you are ready to formulate it again and continue to step 2.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            {/* <!-- <i className="fa fa-mobile" aria-hidden="true"></i> --> */}
            <div className="packages">
              <h4>2. EXPRESS</h4>
              <p>Create a video or an audio track or a text where you tell your wish using the magic words: "I WISH (your wish) TARATAM - REALIZE".</p>
              <p>Share your wish using your favorite communication tools and the hash tags "#(your wish)" and "#taratam" "#taratamrealize"</p>

              {/* <!-- form for the wish --> */}
              <input type="button" className="btn btn-primary" data-toggle="collapse" data-target="#wishform" value="Express your wish"/>
              {/* <!-- HTML код сворачиваемого элемента --> */}
              <div id="wishform" >{/* className="collapse"*/}
                <form className="form-inline" onSubmit={sendWishData}>
                  <div className="input-group input-group-lg wow fadeInUp" data-wow-delay="1.2s">
                      <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-external-link" aria-hidden="true"></i></span>
                      <input value={wish} onChange={(event)=>{setWish(event.target.value)}}
                        type="text" name="link" className="form-control" aria-describedby="sizing-addon1" placeholder="WISH"/>
                  </div>
                  <div className="input-group input-group-lg wow fadeInUp" data-wow-delay="1.2s">
                      <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                      <input value={email} onChange={(event)=>{setEmail(event.target.value)}}
                        type="email" name="email" className="form-control" aria-describedby="sizing-addon1" placeholder="Your email address"/>
                  </div>
                  <button type="submit" className="btn btn-success wow fadeInUp" data-wow-delay="2.4s">Send</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            {/* <!-- <i className="fa fa-database" aria-hidden="true"></i> --> */}
            <div className="packages">
              <h4>3. REALIZE</h4>
              <p>To make it possible for your wish to be realized you must start to realize the wishes of others.</p>
              <a href="#realizewish" className="btn btn-success" role="button">Realize a wish</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- End Make a Wish --> */}

    {/* <!-- Realize a Wish --> */}

    <div id="realizewish" className="realizewish">
      <div className="container">
        <div className="row">
          <h1>REALIZE A WISH</h1>
          <p>To realize a wish just search using tags in communication tools (like FB, Youtube, Instagram) and see if there are some wishes that you are able to fulfill or to be helpfull with. You can chat directly or create group of Realizers (we suggest 20 persons + 1 official TARATAM moderator). Than... REALIZE!</p>
          <p>When you have realize a wish add a comment or, better yet, create a new post or video to tell your story of wish realization. This can be very useful for everybody!
          </p>
        </div>
      </div>
      <div className="banner-text text-center">
        <h1>MAKE A WISH</h1>
        <h1>TARATAM REALIZE</h1>
      </div>
    </div>
    {/* <!-- End Realize a wish --> */}



  {/* <!-- Footer --> */}


  <footer className="section footer">
    <div className="footer-bottom">
      <div className="container">
        <div className="col-md-12">
          <p>What communication tool do you usually use?</p>
          <ul className="footer-share">
            <li><a href="https://www.facebook.com/TARATAMrealize/" target="_blank"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UC68tf_ASemDlS8ckr1dfPuQ" target="_blank"><i className="fa fa-youtube"></i></a></li>
            <li><a href="http://libereria.net/groups/5" target="_blank"><i className="fa fa-home" aria-hidden="true"></i></a></li>
            {/* <!--<li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
            <li><a href="#"><i className="fa fa-vimeo"></i></a></li>--> */}
          </ul>

          <p>Not listed yet? <a href="" data-toggle="collapse" data-target="#addsocial">Add one!</a><br/></p>
          <div id="addsocial" className="collapse">
            <form action="" method="post" className="form-inline">
              <div className="input-group input-group-lg wow fadeInUp" data-wow-delay="1.2s">
                  <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-external-link" aria-hidden="true"></i></span>
                  <input type="text" name="link" className="form-control" aria-describedby="sizing-addon1" placeholder="Link to a social net"/>
              </div>
              <div className="input-group input-group-lg wow fadeInUp" data-wow-delay="1.2s">
                  <span className="input-group-addon" id="sizing-addon1"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  <input type="email" name="email" className="form-control" aria-describedby="sizing-addon1" placeholder="Your email address"/>
              </div>
              <button type="submit" className="btn btn-success wow fadeInUp" data-wow-delay="2.4s">Send</button>
            </form>
          </div>
          <p>TARATAM <i className="fa fa-heart pulse"></i> WISH REALIZER</p>
        </div>
      </div>
    </div>
  </footer>

</>

}
