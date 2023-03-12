import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FeedPage } from '../pages/feed';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import {SignupPage} from '../pages/signup';
import {AdressRegistrationPage} from "../pages/adressRegistration/index"
import { RestaurantsPage} from '../pages/restaurants/restaurant'
import { CartPage} from '../pages/cart/index'
import { ProfilePage } from '../pages/profile';
import { EditAddress } from '../pages/editAddress';
import { EditProfilePage } from '../pages/editProfile';

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/feed' element={<FeedPage/>}/>
                <Route path='/restaurants/:restauranteId' element={<RestaurantsPage/>}/>
                <Route path='/adress' element={< AdressRegistrationPage />}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='/edit-address' element={<EditAddress/>}/>
                <Route path='profile/edit-profile' element={<EditProfilePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}