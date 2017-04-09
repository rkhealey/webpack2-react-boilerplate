export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';

function countUp() {
  return {
    type: COUNT_UP,
  };
}

function countDown() {
  return {
    type: COUNT_DOWN,
  };
}

export default {
  countUp,
  countDown,
};
