import { render } from '@testing-library/vue';
import HelloWorld from '@/components/HelloWorld.vue';

function renderHelloWorld() {
  return render(HelloWorld);
}

describe('HelloWorld.vue', () => {
  it('passes basic test', () => {
    expect(123).toEqual(123);
  });

  it('should render greeting', () => {
    const { getByText } = renderHelloWorld();

    const greetingEl = getByText(/hello/);
    expect(greetingEl).toBeDefined();
  });
});
