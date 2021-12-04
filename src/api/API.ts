/* eslint-disable consistent-return */

import axios from 'axios';
import { useAlertModal } from '../state/actions/useModal';

// http://localhost:8080
const baseURL: string = 'http://localhost:8080/api/';
const headers = {
    'Content-Type': 'application/json',
};

export const API = axios.create({
    baseURL,
    timeout: 10000,
    headers,
});
