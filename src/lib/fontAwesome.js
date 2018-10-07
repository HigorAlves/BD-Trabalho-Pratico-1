import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faNewspaper, faSearch, faUsers);

export const NEWSPAPER = () => <FontAwesomeIcon icon="newspaper" size={'3x'} color='#027ac6' />;
export const USERS = () => <FontAwesomeIcon icon="users" size={'3x'} color='#027ac6' />;
export const SEARCH = () => <FontAwesomeIcon icon="search" size={'1x'} />;
