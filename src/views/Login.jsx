import React from 'react';
import useForm from 'react-hook-form';
import { request, LS } from '../utils';

function Login({ history }) {
   const { register, handleSubmit } = useForm();

   const onSubmit = async (data) => {
      const { res, err } = await request.post(
         'http://localhost:3001/auth/login',
         data
      );
      if (err) {
         alert(err.message);
      } else {
         LS.save('auth', res.token);
         history.push('/');
      }
   };

   return (
   //    <div id="login" className="login">
   //       <div className="logo">
   //          <div className="simple-text logo-mini">
   //             <div className="logo-img">
   //                <img src={logo} alt="logo_image" />
   //             </div>
   //          </div>
   //          <h2 className="simple-text logo-normal">HouseKeeper</h2>
   //       </div>
   //       <div className="content">
   //          <Container fluid>
   //             <Row>
   //                <Col md={{ span: 5, offset: 3 }}>
   //                   <Card
   //                      title="Login"
   //                      lineBreak
   //                      content={
   //                         <form onSubmit={handleSubmit(onSubmit)}>
   //                            <FormGroup>
   //                               <FormLabel>Username</FormLabel>
   //                               <Form.Control
   //                                  type="text"
   //                                  placeholder="Enter username"
   //                                  name="username"
   //                                  ref={register}
   //                               />
   //                            </FormGroup>
   //                            <FormGroup>
   //                               <FormLabel>Password</FormLabel>
   //                               <Form.Control
   //                                  type="password"
   //                                  placeholder="Password"
   //                                  name="password"
   //                                  ref={register}
   //                               />
   //                            </FormGroup>
   //                            <Button
   //                               block
   //                               size="sm"
   //                               type="submit"
   //                               variant="success"
   //                            >
   //                               Login
   //                            </Button>
   //                         </form>
   //                      }
   //                      footer
   //                      preText="New to HouseKeeper? "
   //                      link="signup"
   //                      linkText="Create an Account"
   //                   />
   //                </Col>
   //             </Row>
   //          </Container>
   //       </div>
   //    </div>
   );
}

export default Login;
