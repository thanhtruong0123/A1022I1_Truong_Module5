import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";

export function Declaration() {
    return (
        <>
            <div className='container'>
                <h1>Tờ khai y tế</h1>

                <Formik
                    initialValues={
                        {
                            name: '',
                            idCard: '',
                            birthday: '',
                            gender: '',
                            nationality: '',
                            company: '',
                            department: '',
                            insurance: '',

                            province: '',
                            district: '',
                            wards: '',
                            address: '',
                            email: '',

                            area: '',
                            signal: [],
                            contact: [],
                        }
                    }

                    validationSchema={
                        Yup.object ({
                            name: Yup.string()
                                .required('Required'),
                            idCard: Yup.string()
                                .required('Required'),
                            birthday: Yup.number()
                                .required('Required')
                                .min(1901),
                            nationality: Yup.string()
                                .required('Required'),
                            province: Yup.string()
                                .required('Required'),
                            district: Yup.string()
                                .required('Required'),
                            wards: Yup.string()
                                .required('Required'),
                            phone: Yup.string()
                                .required('Required'),
                            email: Yup.string()
                                .required('Required')
                                .email('Invalid email address')
                        })
                    }
                    
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                >
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Họ tên</label>
                            <Field type='text' className='form-control' id='name' name='name' />
                            <ErrorMessage name="name" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='idCard' className='form-label'>Số hộ chiếu/ CMND</label>
                            <Field type='text' className='form-control' id='idCard' name='idCard' />
                            <ErrorMessage name="idCard" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='birthday' className='form-label'>Năm sinh</label>
                            <Field type='text' className='form-control' id='birthday' name='birthday' />
                            <ErrorMessage name="birthday" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Giới tính &nbsp;&nbsp;</label>
                            <div className='form-check form-check-inline'>
                                <Field type='radio' className='form-check-input' id='male' name='gender' value='Nam' />
                                <label className='form-check-label' htmlFor='male'>Nam</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <Field type='radio' className='form-check-input' id='female' name='gender' value='Nữ' />
                                <label className='form-check-label' htmlFor='female'>Nữ</label>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='nationality' className='form-label'>Quốc tịch</label>
                            <Field type='text' className='form-control' id='nationality' name='nationality' />
                            <ErrorMessage name="nationality" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='company' className='form-label'>Công ty làm việc</label>
                            <Field type='text' className='form-control' id='company' name='company' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='department' className='form-label'>Bộ phận làm việc</label>
                            <Field type='text' className='form-control' id='department' name='department' />
                        </div>

                        <div className='mb-3'>
                            <label>Có thẻ bảo hiểm y tế &nbsp;&nbsp;</label>           
                            <Field type='checkbox' className='form-check-input' id='insurance' name='insurance'/>
                        </div>
                        
                        <h4>Địa chỉ liên lạc tại Việt Nam</h4>

                        <div className='mb-3'>
                            <label htmlFor='province' className='form-label'>Tỉnh thành</label>
                            <Field type='text' className='form-control' id='province' name='province' />
                            <ErrorMessage name="province" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='district' className='form-label'>Quận/ huyện</label>
                            <Field type='text' className='form-control' id='district' name='dictrict' />
                            <ErrorMessage name="district" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='wards' className='form-label'>Phường/ xã</label>
                            <Field type='text' className='form-control' id='wards' name='wards' />
                            <ErrorMessage name="wards" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='address' className='form-label'>Số nhà, phố, tổ dân phố/thôn/đội</label>
                            <Field type='text' className='form-control' id='address' name='address' />
                            <ErrorMessage name="address" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <Field type='text' className='form-control' id='email' name='email' />
                            <ErrorMessage name="email" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <h4>Trong vòng 14 ngày qua, Anh/ Chị có đến quốc gia/ vùng lãnh thổ nào?</h4>
                        <Field as='textarea' className='form-control' name='area' />

                        <h4>Trong vòng 14 ngày qua, Anh/ Chị có thấy xuất hiện dấu hiệu nào sau đây không?</h4>
                        <div className='mb-3'>
                            <div className='form-check'>
                                <Field type='checkbox' className='form-check-input' name='signal' value='Sốt' />
                                <label className='form-check-label'>Sốt</label>
                            </div>
                            <div className='form-check'>
                                <Field type='checkbox' className='form-check-input' name='signal' value='Ho' />
                                <label className='form-check-label'>Ho</label>
                            </div>
                            <div className='form-check'>
                                <Field type='checkbox' className='form-check-input' name='signal' value='Khó thở' />
                                <label className='form-check-label'>Khó thở</label>
                            </div>
                            <div className='form-check'>
                                <Field type='checkbox' className='form-check-input' name='signal' value='Viêm phổi' />
                                <label className='form-check-label'>Viêm phổi</label>
                            </div>
                            <div className='form-check'>
                                <Field type='checkbox' className='form-check-input' name='signal' value='Đau họng' />
                                <label className='form-check-label'>Đau họng</label>
                            </div>
                            <div className='form-check'>
                                <Field type='checkbox' className='form-check-input' name='signal' value='Mệt mỏi' />
                                <label className='form-check-label'>Mệt mỏi</label>
                            </div>
                        </div>

                        <h4>Trong vòng 14 ngày qua, Anh/ Chị có tiếp súc với?</h4>
                        <div className='mb-3'>
                            <div className='form-check'>
                                <Field type='checkbox' className='form-check-input' name='contact'
                                        value='Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19' />
                                <label className='form-check-label'>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                            </div>
                            <div className='form-check'>
                                <Field type='checkbox' className='form-check-input' name='contact'
                                        value='Người từ nước có bệnh COVID-19' />
                                <label className='form-check-label'>Người từ nước có bệnh COVID-19</label>
                            </div>
                            <div className='form-check'>
                                <Field type='checkbox' className='form-check-input' name='contact'
                                        value='Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)' />
                                <label className='form-check-label'>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}