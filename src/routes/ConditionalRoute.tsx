import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

type ConditionalRouteProps = {
    isValid: boolean;
    redirectTo: string;
    component: () => JSX.Element;
} & RouteProps;

const ConditionalRoute = ({ isValid, redirectTo, component: Component, ...rest }: ConditionalRouteProps) => {
    return (
        <Route
            {...rest}
            render={props =>
                isValid ?
                    <Component {...props} /> :
                    <Redirect to={redirectTo} />
            } />
    )
};

export { ConditionalRoute };

