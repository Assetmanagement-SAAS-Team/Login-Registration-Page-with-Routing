import {React,useState} from 'react'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allEntry, setAllEntry] = useState([]);
    const dataSubmit = (e) =>{
        e.preventDefault();
        const newEntry = {
            email:email,
            password:password
        }
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry)
        setEmail('');
        setPassword('');
    }
    return (
        <div>
            <form action="" onSubmit={dataSubmit} className="shadow">
                <div className='main'  style={{
                width:"100vw",
                height:"100vh",
                display:"grid",
                placeItems:"center",
                alignItems:"center",
                
            }}>
            
            <div className='p-3' style={{
                width:"400px",
                border:"1px solid #2522",
                boxShadow:'1px 2px 14px 1px'
                
            }}>

            {/* header part created */}
               <div className="">
                    <ul class="nav nav-tabs">
                        <li class="nav-item w-50 p-2">
                            <a class="nav-link text-center text-dark active fyd" aria-current="page" href="Dlogin">For Your Doughter</a>
                        </li>
                        <li class="nav-item w-50 p-2">
                            <a class="nav-link text-center text-dark bg-warning fys" aria-current="page" href="#">For Your Login</a>
                        </li>
                    </ul>
                </div> 
                
                {/* field douyghter */}
                <div>
                    <div className="form-group p-3">
                        <input type="email" name="email" id="" placeholder="Enter User id " required="yes" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group p-3">
                        <input type="password" name="password" id="" placeholder="password " required="yes" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group p-3 w-100">
                        <center>  <button className="btn btn-success w-25" type="submit" style={{alignItems:"center"}}> login </button></center>
                    </div>
                    <div className="">
                        <a className="py-2 text-center" href="Regis">Create a new account </a>
                    </div>
            </div>
            </div>
            </div>
            </form>
            {/* data show */}
            <div className="text-center">
                    {
                        allEntry.map((cur) => {
                            return(
                                <div>
                                    <p>User id :{cur.email}</p>
                                    <p>password :{cur.password}</p>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}