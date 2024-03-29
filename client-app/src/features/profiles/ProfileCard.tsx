import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon} from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';

interface Props {
    profile: Profile;
}

export default observer(function ProfileCard({profile}: Props) {
    function truncate(str: string | undefined) {
        if (str) {
            return str.length > 40 ? str.substring(0, 37) + '...' : str;
        }
    }

    return (
        <Card as={Link} to={`/profiles/${profile.username}`}>
            {/* <Image src={profile.image || '/assets/user.png'} /> */}
            <Card.Content>
                <Card.Header>{profile.firstName}</Card.Header>
                <Card.Description>{truncate(profile.title)}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {/* {profile.followersCount} followers */}
            </Card.Content>
            {/* <FollowButton profile={profile} /> */}
        </Card>
    )
})