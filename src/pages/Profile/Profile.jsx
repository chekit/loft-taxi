import React from 'react';

import ProfileForm from '../../components/Forms/ProfileForm';
import PageWithForm from '../../components/Struct/PageWithForm';

export const Profile = props => {
    return (
        <PageWithForm isFadeout={true}>
            <ProfileForm {...props} />
        </PageWithForm>
    );
}