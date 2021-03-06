export type LifeCycleName = 'beforeCreate' | 'created' | 'beforeMount' | 'mounted' | 'beforeUpdate'
| 'updated' | 'beforeDetroy' | 'activated' | 'deactivated'
export const lifeCycleName: LifeCycleName[] = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDetroy', 'activated', 'deactivated']
export type VueOptionNameSetAsMethod = 'data' | LifeCycleName
export type VueOptionNameSetAsProperty = 'name' | 'props' | 'computed' | 'watch' | 'methods'
export type VueOptionName = VueOptionNameSetAsMethod | VueOptionNameSetAsProperty

/*
store the descriptions of import specifiers

like:import * as xxx from xxx
type:"ImportNamespaceSpecifier"

like:import { xxx } from xxx
"ImportSpecifier"

like:import xxx from xxx
"ImportDefaultSpecifier"
*/
export interface ImportSpecifer {
  name: string
  type: string
}
/*
store the definition of function
*/
export interface FunctionDescription {
  name: string
  code: string
  use: string[]
}

export interface Dependence {
  source: string
  comment: string
  specifiers: ImportSpecifer[]
}
export interface Component {
  name: string
  comment: string
}
export interface Prop {
  name: string
  required?: boolean
  default?: number | string | boolean | null | undefined | FunctionDescription
  validator?: FunctionDescription
  type?: string
  comment?: string
}
export interface Data {
  name: string
  value: string
  comment?: string
}
export interface Watch {
  name: string
  comment: string
  handler: FunctionDescription
  deep?: boolean,
  immediate?: boolean
}
export interface Computed {
  name: string
  comment: string
  getter?: FunctionDescription
  setter?: FunctionDescription
  func?: FunctionDescription
}
export interface Method extends FunctionDescription {
  comment: string
}
export interface LifeCycle extends FunctionDescription {
  name: LifeCycleName
  comment: string
}

export default interface ComponentInfo {
  comment?: string
  name?: string
  dependencies?: Dependence[]
  components?: Component[]
  data?: Data[]
  props?: Prop[]
  methods?: Method[]
  watch?: Watch[]
  computed?: Computed[]
  lifeCycles?: LifeCycle[]
}
