interface ReturnedFn {
	(component: any): any;
}

interface CSSModulesFn {
	(styles: any, options?: any): ReturnedFn;
}

declare var CSSModules: CSSModulesFn;

declare module "react-css-modules" {
	export default CSSModules;
}
