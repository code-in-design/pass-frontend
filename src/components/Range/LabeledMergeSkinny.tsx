import { useRef, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import Triangle from '../../../public/images/icons/triangle.svg';
import Medal from '../../../public/images/icons/medal.svg';

interface Props {
  value: number;
}
const MIN = 0;
const MAX = 100;
const COLORS = ['#E4E6F0', '#6B77F8', '#6B77F8', '#E4E6F0'];

const LabeledMergeSkinny = (props: Props) => {
  const { value } = props;
  const [values, setValues] = useState([0, value, 100]);
  const rangeRef: any = useRef<Range>();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        zIndex: '1',
        padding: '0 15px',
      }}
    >
      <Range
        disabled
        allowOverlap
        values={values}
        ref={rangeRef}
        min={MIN}
        max={MAX}
        onChange={values => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '6px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: COLORS,
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index, value }) => {
          return (
            <div
              {...props}
              style={{
                ...props.style,
                borderRadius: '4px',
                backgroundColor: '#6B77F8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {index === 0 && (
                <div
                  data-label={index}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    bottom: '-28px',
                    color: '#B7B9C9',
                    fontSize: '12px',
                    fontWeight: 700,
                    lineHeight: '16px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <div style={{ color: '#B7B9C9', width: '8px', margin: '0 auto' }}>
                    <Triangle />
                  </div>
                  최저 기록
                </div>
              )}
              {index === 1 && (
                <div
                  data-label={index}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    top: '-34px',
                    color: '#fff',
                    fontSize: '12px',
                    lineHeight: '16px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    backgroundColor: '#60C8DE',
                    borderRadius: '8px',
                    padding: '4px 8px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: '-15px',
                      marginTop: '0px',
                      borderTop: '10px solid #60C8DE',
                      borderRight: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '10px solid transparent',
                      borderRadius: '2px',
                      transform: 'translate(-50%)',
                    }}
                  />
                  나의 위치
                </div>
              )}
              {index === 2 && (
                <div
                  data-label={index}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    bottom: '-28px',
                    color: '#6B77F8',
                    fontSize: '12px',
                    fontWeight: 700,
                    lineHeight: '16px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <div style={{ color: '#6B77F8', width: '8px', margin: '0 auto' }}>
                    <Triangle />
                  </div>
                  <div style={{ display: 'flex' }}>
                    최고 기록
                    <Medal />
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default LabeledMergeSkinny;
