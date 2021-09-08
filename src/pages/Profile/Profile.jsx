import React from 'react';
import { AppRoutes } from '../../common/app.routes';

import ProfileForm from '../../components/Forms/ProfileForm';
import PageWithForm from '../../components/Struct/PageWithForm';

import './Profile.scss';

export const Profile = ({ history }) => {
    return (
        <PageWithForm isFadeout={true}>
            <ProfileForm redirect={() => history.push(AppRoutes.ORDER)} />
        </PageWithForm>
    );
}