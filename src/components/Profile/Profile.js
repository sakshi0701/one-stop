import React, { useState } from "react"
import { Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
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
                <Card className="mt-4 mb-5 w-10 update-card">
                    <Card.Body>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div className="fields">
                            <div className="email profile-email"><strong>Email:  </strong> {currentUser.email}</div>
                        </div>
                        <div className="links">
                            <Link to="/update-profile" className="btn btn-warning w-100 mt-3">
                                Update Profile
                            </Link>
                        </div>

                        <div className="w-100 text-center mt-2">
                            <button variant="link" onClick={handleLogout} className="btns">
                                Log Out
              </button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}