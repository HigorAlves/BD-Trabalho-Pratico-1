import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faNewspaper, faSearch);

export const NEWSPAPER = () => <FontAwesomeIcon icon="newspaper" size={'3x'} />;
export const SEARCH = () => <FontAwesomeIcon icon="search" size={'1x'} />;
