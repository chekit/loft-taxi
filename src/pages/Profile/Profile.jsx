import React, { useContext } from 'react';
import { AppRoutes } from '../../common/app.routes';

import ProfileForm from '../../components/Forms/ProfileForm';
import PageWithForm from '../../components/Struct/PageWithForm';
import { AuthContext } from '../../contexts/AuthContext';

import './Profile.scss';

export const Profile = ({ history }) => {
    const { updateProfile } = useContext(AuthContext);

    return (
        <PageWithForm isFadeout={true}>
            <ProfileForm redirect={() => history.push(AppRoutes.ORDER)} save={updateProfile} />
        </PageWithForm>
    );
}