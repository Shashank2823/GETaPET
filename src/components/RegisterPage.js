
import React,{useState} from 'react';
import axios from "axios";
export default function RegisterPage() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        contact: "",
        password: "",
      });
   
    //   const [err, setError] = useState(null);

    //   const navigate = useNavigate();
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res=await axios.post("/auth/register", inputs);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      };


    return (
        <div>
           {/* name,email,contact no.2,create pass,I agree to conditions(required),submit*/}
           <div className="card h-100" style={{height:'100px'}} >
                <div className="card-body p-4 p-lg-5 text-black d-flex align-items-center" style={{}}>
                    <form className="w-100">
                        <div className="text-center mb-5">
                            <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                            
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>REGISTER NOW !</h5>
                        <div className="form-outline mb-4">
                            <input type="text" id="form2Example17" className="form-control form-control-lg" 
                            name="username"
                            onChange={handleChange}/>
                            <label className="form-label" htmlFor="form2Example17">Name:</label>
                            
                        </div>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example17" className="form-control form-control-lg" 
                            name="email"
                            onChange={handleChange}/>
                            <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="number" id="form2Example27" className="form-control form-control-lg"
                            name="contact"
                            onChange={handleChange} />
                            <label className="form-label" htmlFor="form2Example27">Contact</label>
                        </div>
                        
                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example27" className="form-control form-control-lg" 
                            name="password"
                            onChange={handleChange}/>
                            <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleSubmit}>SUBMIT</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
