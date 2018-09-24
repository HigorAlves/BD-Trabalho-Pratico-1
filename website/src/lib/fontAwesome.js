import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

library.add(faNewspaper);

export const NEWSPAPER = () => <FontAwesomeIcon icon="newspaper" size={'3x'} />;
