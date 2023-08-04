import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>


                    <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/Preston_176' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='mailto:prestonnyamweya@gmail.com' role='button'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/preston-mayieka-308b2b24a/' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://github.com/preston176/' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Let's connect</strong>
                                </p>
                            </MDBCol>

                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        My name is Pres. I am a react developer
                    </p>
                    <p>Checkout my other projects <a href="https://github.com/preston176/"><span>Here</span></a></p>
                </section>

                <section className=''>
                    <MDBRow>

                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright
                <a className='text-white' href='#'>
                    {/* preston176.dev */}
                </a>
            </div>
        </MDBFooter>
    );
}