import IModule = angular.IModule;

import * as angular from 'angular'
import { selector, componentOptions } from './hello-typescript.component';

angular.module('helloTypescript', []).component(selector, componentOptions);
