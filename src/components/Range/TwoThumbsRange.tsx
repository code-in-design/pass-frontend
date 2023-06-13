import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styled from '@emotion/styled';

const TwoThumbsRange = ({ STEP, MIN, MAX }) => {
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
            <div
              style={{
                position: 'absolute',
                bottom: '-36px',
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
                  right: '50%',
                  top: '-14px',
                  transform: 'translateX(50%)',
                  marginTop: '0px',
                  borderTop: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderBottom: '10px solid #60C8DE',
                  borderLeft: '10px solid transparent',
                  borderRadius: '2px',
                }}
              />
              {values[index]}
              {index === 0 ? <span style={{ fontSize: '10px', lineHeight: '12px', fontWeight: 500 }}>부터</span> : <span style={{ fontSize: '10px', lineHeight: '12px', fontWeight: 500 }}>까지</span>}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default TwoThumbsRange;

const A = styled.div`
  transform: translateX();
`;
