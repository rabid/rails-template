import { Form } from '../../components/utils';

describe('Form', () => {
  it('renders children', () => {
    const { container } = render(
      <Form onSubmit={jest.fn()}>
        <div>Hello World</div>
      </Form>
    );

    expect(container).toHaveTextContent('Hello World');
  });

  describe('when the form is submitted', () => {
    it('calls the submit handler once', () => {
      const handleSubmit = jest.fn();

      render(<Form onSubmit={handleSubmit} />);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('calls the submit handler with the event', () => {
      const handleSubmit = jest.fn();

      render(<Form onSubmit={handleSubmit} />);

      expect(handleSubmit).toHaveBeenCalledWith();
    });
  });

  describe('the submitText prop', () => {
    describe('when the prop is provided', () => {
      it('uses the value for the submit button', () => {
        const { container } = render(
          <Form submitText="Submit this form please" onSubmit={jest.fn()} />
        );

        expect(container).toHaveTextContent('Submit this form please');
      });
    });

    describe('when the prop is absent', () => {
      it('uses a sensible default value', () => {
        const { container } = render(
          <Form submitText="Submit this form please" onSubmit={jest.fn()} />
        );

        expect(container).toHaveTextContent('Submit');
      });
    });
  });

  describe('the onReset prop', () => {
    describe('when the prop is present', () => {
      it('has a reset button', () => {
        render(<Form onSubmit={jest.fn()} onReset={jest.fn()} />);

        expect(screen.getByRole('reset')).toBeInTheDocument();
      });

      describe('when the reset button is clicked', () => {
        it('calls the reset handler once', () => {
          const handleReset = jest.fn();

          render(<Form onSubmit={jest.fn()} onReset={handleReset} />);

          expect(handleReset).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('when the prop is absent', () => {
      it('does not have a reset button', () => {
        //
      });
    });
  });
});
