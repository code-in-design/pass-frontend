import { useRef, useState } from 'react';
import { Range, getTrackBackground, useThumbOverlap } from 'react-range';

const STEP = 0.1;
const MIN = 0;
const MAX = 100;
const COLORS = ['#E4E6F0', '#6B77F8', '#6B77F8', '#E4E6F0'];

const ThumbLabel = ({ rangeRef, values, index }: { rangeRef: Range | null; values: number[]; index: number }) => {
  const [labelValue, style] = useThumbOverlap(rangeRef, values, index);
  return (
    <div
      data-label={index}
      style={{
        display: 'block',
        position: 'absolute',
        // top: '-28px',
        bottom: '-38px',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '14px',
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
        padding: '4px',
        borderRadius: '4px',
        backgroundColor: '#548BF4',
        whiteSpace: 'nowrap',
        ...(style as React.CSSProperties),
      }}
    >
      {/* {labelValue} */}
      최고기록
    </div>
  );
};

const LabeledMergeSkinny: React.FC<{ rtl: boolean }> = ({ rtl }) => {
  const [values, setValues] = useState([25, 50, 75]);
  const rangeRef: any = useRef<Range>();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        allowOverlap
        disabled
        values={values}
        ref={rangeRef}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={values => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
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
                borderRadius: '7px',
                background: getTrackBackground({
                  values,
                  colors: COLORS,
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index }) => {
          return (
            <div
              {...props}
              style={{
                ...props.style,
                height: `0px`,
                width: `0px`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  height: '16px',
                  width: '5px',
                }}
              />
              <ThumbLabel rangeRef={rangeRef.current} values={values} index={index} />
            </div>
          );
        }}
      />
    </div>
  );
};

export default LabeledMergeSkinny;
