import React, {PureComponent} from 'react';
// import LoadingIndicator from 'commons/ui/components/LoadingIndicator';

// export default class LazyLoadContainer extends PureComponent {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             Component: null
//         }
//     }
//
//     componentWillMount() {
//         if (!this.state.Component) {
//             this.props.moduleProvider().then(({Component}) => this.setState({Component}));
//         }
//     }
//
//     render() {
//         const {Component} = this.state;
//
//         //The magic happens here!
//         return (
//             <div>
//                 {Component ? <Component/> : <LoadingIndicator/>}
//             </div>
//         );
//     }
// };


// withLazyLoading(
//     () => import('./features/Post'),
//     <Loading type="spinner" />
// )

export function withLazyLoading(getComponent,
                                Spinner = null,
                                onError = noop) {
    return class LazyLoadingWrapper extends PureComponent {
        state = {
            Component: null,
        }

        componentWillMount() {
            const {onLoadingStart, onLoadingEnd, onError} = this.props

            typeof onLoadingStart === 'function'&& onLoadingStart()

            getComponent()
                .then(esModule => {
                    typeof onLoadingEnd === 'function'&& onLoadingEnd()
                    this.setState({Component: esModule.default})
                })
                .catch(err => {
                    onError(err, this.props)
                })
        }

        render() {
            const {Component} = this.state

            if (!Component) return Spinner

            return <Component {...this.props} />
        }
    }
}

function noop() {
}