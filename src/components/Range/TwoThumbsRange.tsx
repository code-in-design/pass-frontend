import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface Props {
  STEP: number;
  MIN: number;
  MAX: number;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const TwoThumbsRange = (props: Props) => {
  const { MIN, MAX, STEP } = props;
  const [values, setValues] = useState([MIN, MAX]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={values => {
          setValues(values);
          props.setValue('competitionMinRate', values[0]);
          props.setValue('competitionMaxRate', values[1]);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '16px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '8px',
                width: '100%',
                borderRadius: '16px',
                background: getTrackBackground({
                  values,
                  colors: ['#e4e6f0', '#6B77F8', '#e4e6f0'],
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
        renderThumb={({ props, index }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '16px',
              width: '16px',
              borderRadius: '50%',
              backgroundColor: '#6B77F8',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {index === 0 ? (
              <div
                style={{
                  position: 'absolute',
                  bottom: '-36px',
                  left: '0',
                  color: '#fff',
                  width: '76px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#60C8DE',
                  fontSize: '14px',
                  lineHeight: '16px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0 4px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '-15px',
                    marginTop: '0px',
                    borderTop: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderBottom: '10px solid #60C8DE',
                    borderLeft: '10px solid transparent',
                    borderRadius: '2px',
                  }}
                />
                {values[0]}
                <span style={{ fontSize: '10px', lineHeight: '12px', fontWeight: 500 }}>부터</span>
              </div>
            ) : (
              <div
                style={{
                  position: 'absolute',
                  bottom: '-36px',
                  right: '0',
                  color: '#fff',
                  width: '76px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#60C8DE',
                  fontSize: '14px',
                  lineHeight: '16px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0 4px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    right: '0',
                    top: '-15px',
                    marginTop: '0px',
                    borderTop: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderBottom: '10px solid #60C8DE',
                    borderLeft: '10px solid transparent',
                    borderRadius: '2px',
                  }}
                />
                {values[1]}
                <span style={{ fontSize: '10px', lineHeight: '12px', fontWeight: 500 }}>까지</span>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default TwoThumbsRange;
