import utils from '../../sound/utils';

interface StationProtocolProps {
  src?: string
}

const { isHttp } = utils;

const StationProtocol = ({ src }: StationProtocolProps) => {
  const _protocol = isHttp(src)
    ? '(http)'
    : '';
  return (
     <span>&nbsp;{_protocol}</span>
  );
};

export default StationProtocol
