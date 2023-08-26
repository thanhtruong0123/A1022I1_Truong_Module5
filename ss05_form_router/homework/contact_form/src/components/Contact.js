import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export function Contact() {
    
    return (
        <>
            <div className='container'>
                <h1>Contact Form</h1>

                <Formik
                    initialValues = {
                        {
                            name: '',
                            email: '',
                            phone: '',
                            message: ''
                        }
                    }

                    validationSchema = {
                        Yup.object ({
                            name: Yup.string()
                                .required('Name is required'),
                            email: Yup.string()
                                .required('Email is required')
                                .email('Invalid email'),
                            phone: Yup.string()
                                .required('Phone is required')
                        })
                    }

                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                >
                    <Form>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor='name'>Name</label>
                            <Field type='text' className='form-control' id='name' name='name'></Field>
                            <ErrorMessage name="name" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label className='form-label' htmlFor='email'>Email</label>
                            <Field type='text' className='form-control' id='email' name='email'></Field>
                            <ErrorMessage name="email" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label className='form-label' htmlFor='phone'>Phone</label>
                            <Field type='text' className='form-control' id='phone' name='phone'></Field>
                            <ErrorMessage name="phone" className="form-err" component='span'></ErrorMessage>
                        </div>
                        
                        <div className='mb-3'>
                            <label className='form-label' htmlFor='message'>Message</label>
                            <Field type='text' className='form-control' id='message' name='message'></Field>
                        </div>
                        
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}