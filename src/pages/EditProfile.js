import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import close from '../assets/icons/close.png'
import check from '../assets/icons/check.png'
import { GlobalContext } from '../context/GlobalState';

const EditProfile = () => {

    const { profileDetails, handelChange } = useContext(GlobalContext)

    const [name, setName] = useState(profileDetails?.name)
    const [username, setUsername] = useState(profileDetails?.username)
    const [bio, setBio] = useState(profileDetails?.bio)

    const history = useHistory()

    const handelSubmit = () => {
        if (name && username) {
            const data = { name, username, bio }
            localStorage.setItem('profiledetails', JSON.stringify(data))
            handelChange(data)
            history.push('/profile')
        }
    }

    return (
        <div>
            <div className="text-lg font-semibold flex justify-between">
                <div className="flex w-1/2">
                    <img src={close} alt="" className='h-4 relative top-2 mr-4 left-1'
                        onClick={() => history.push('/profile')}
                    />
                    <p>Edit Profile</p>
                </div>
                <img src={check} alt="" className='h-4 mr-2 relative top-2'
                    onClick={handelSubmit}
                />
            </div>
            <div className="">
                <div className="mt-4 flex justify-center items-center">
                    <Avatar
                        alt="Travis Howard"
                        style={{ width: '70px', height: '70px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL880uAgBZkG1hUKl8vQN0DfNIv0YRj96cxp22gDG0gGNplEGtb_lOQpCzRqHHJzVt43g&usqp=CAU"
                    />
                </div>
                <p className='tect-bold text-center text-sm mt-1' style={{ color: 'blue' }}>Change Profile Photo</p>
            </div>
            <div className='mx-2 mt-4 space-y-4'>
                <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    fullWidth
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={name ? false : true}
                    helperText="Name is required"
                />
                <TextField
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                    fullWidth
                    size="small"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={username ? false : true}
                    helperText="Username is required"
                />
                <TextField
                    id="standard-basic"
                    label="Bio"
                    variant="standard"
                    fullWidth
                    size="small"
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                />
            </div>
        </div>
    )
}

export default EditProfile
