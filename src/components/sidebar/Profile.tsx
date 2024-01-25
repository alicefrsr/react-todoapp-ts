import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
// import PropTypes from 'prop-types';

interface IProfile {
  userName: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
  // FC 'accepts' a generic type of IProfile
  const { userName } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '80px',
          height: '80px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${userName.substring(0, 1)}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome, {userName}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal task area
      </Typography>
    </Box>
  );
};

// Profile.propTypes = {
//   userName: PropTypes.string,
// };
export default Profile;
