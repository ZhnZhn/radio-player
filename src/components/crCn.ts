const _isArr = Array.isArray;

type CnType = string | undefined
type CnTupleType = [boolean | undefined, CnType]
type ItemCnType = CnTupleType | CnType

const _getCn = (arrOrStr: ItemCnType): CnType => _isArr(arrOrStr)
  ? arrOrStr[0] ? arrOrStr[1] : ''
  : arrOrStr || '';

const crCn = (...args: Array<ItemCnType>): CnType => {
  const _cl1 = _getCn(args[0])
  , _cl2 = _getCn(args[1]);
  return _cl1
    ? _cl2 ? `${_cl1} ${_cl2}` : _cl1
    : _cl2 || void 0 ;
};

export default crCn
