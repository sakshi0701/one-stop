import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Sidebar from '../Sidebar/Sidebar'
import './profile.css';

export default function Profile() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    const [imgPreview, setImgPreview] = useState(null);
    // eslint-disable-next-line
    const [ImgError, setImgError] = useState(false);

    const handleImgChange = (e) => {
        setImgError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(selected);
        } else {
            setImgError(true);
        }
    };

    return (
        <>
        <Sidebar />
            <div className="profile">
                <div className="profile-title"> Your Profile</div>
                <div>
                    <div className="profileImg-area">
                        {error && <p className="errorMsg">File not supported</p>}
                        <div
                            className="imgPreview"
                            style={{
                                background: imgPreview
                                    ? `url("${imgPreview}") no-repeat center/cover`
                                    : "#fff"
                            }}
                        >
                            {!imgPreview && (
                                <>
                                    <p>Add an image</p>
                                    <label htmlFor="fileUpload" className="customFileUpload">
                                        Choose file
              </label>
                                    <input type="file" id="fileUpload" onChange={handleImgChange} />
                                    <span>(jpg, jpeg or png)</span>
                                </>
                            )}
                        </div>
                        {imgPreview && (
                            <button onClick={() => setImgPreview(null)} className="removeImg">Remove image</button>
                        )}
                    </div>
                </div>
                <div className="d-flex flex-column center">
                {error && <Alert variant="danger">{error}</Alert>}
                        <div className="fields">
                            <div className="email profile-email"><strong>Email:  </strong> {currentUser.email}</div>
                        </div>
                        <div className="links">
                            <Link to="/update-profile" className="btns">
                                Update Profile
                            </Link>
                        </div>

                        <div className="w-100 text-center mt-2">
                            <button variant="link" onClick={handleLogout} className="btn btn-warning w-10 mt-3">
                                Log Out
                            </button>
                        </div>
                </div>
            </div>
        </>
    )
}