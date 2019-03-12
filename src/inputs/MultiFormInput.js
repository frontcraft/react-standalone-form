import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import withFormControl from '../FormControl'
import { breakpoint } from '../themeHelpers'


class MultiFormInput extends React.Component {
  state = {
    value: this.props.value,
    cachedValue: null,
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.value !== this.state.value) {
      this.props.setValue(this.props.name, this.state.value, this.props.required)
    }
    // To prevent strange behaviors after deleting an item, force rerender by
    // setting a value to null, then loading it up again.
    if (snapshot !== null) {
      this.setState({ value: [], cachedValue: snapshot })
    }
    if (!this.state.value.length && this.state.cachedValue) {
      this.setState({ value: this.state.cachedValue, cachedValue: null })
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.value.length > this.state.value.length && this.state.value.length) {
      return this.state.value
    }
    return null
  }
  render() {
    const {
      form,
      moreLabel,
      moreComponent,
      moreComponentProps,
      classes,
    } = this.props
    const MoreComponentProp = moreComponent
    const { value } = this.state
    return (
      <div>
        {value && value.map((fields, index) => {
          const checkedFields = Object.keys(fields).length ? { fields } : {}
          const formWithProps = {
            ...form,
            props: {
              ...checkedFields,
              onChange: updatedFields => {
                // Prevent splice directly on value, because it should stay immutable.
                let mutableValue = [...value]
                mutableValue.splice(index, 1, updatedFields)
                this.setState({ value: mutableValue })
              },
            },
          }
          return (
            <div className={classes.multiFormInput} key={index}>
              {formWithProps}
              <button
                className={classes.delete}
                onClick={() => {
                  this.setState({ value: value.filter((item, newIndex) => newIndex !== index) })
                }}
                title='Delete'
              >X</button>
            </div>
          )
        })}
        <MoreComponentProp
          onClick={() => this.setState({ value: [...value, {}] })}
          {...moreComponentProps}
        >{moreLabel}</MoreComponentProp>
      </div>
    )
  }
}

MultiFormInput.propTypes = {
  form: PropTypes.object,
  moreLabel: PropTypes.string,
  moreComponent: PropTypes.elementType,
  moreComponentProps: PropTypes.object,
}

MultiFormInput.defaultProps = {
  moreLabel: 'Add more',
  moreComponent: 'button',
}

export default withFormControl(withStyles(theme => ({
  multiFormInput: {
    display: 'flex',
    '& + &': {
      marginTop: theme.sizes.inputGutterBottom,
    },
    '& > *:first-child': {
      flexGrow: 1,
    },
  },
  delete: {
    backgroundImage: 'none',
    backgroundColor: theme.colors.inputBorder, // lighen
    color: 'white',
    fontSize: theme.typography.inputFontSize,
    padding: 5,
    marginLeft: 15,
    border: 'none',
    borderTopRightRadius: theme.sizes.borderRadius,
    borderBottomRightRadius: theme.sizes.borderRadius,
    cursor: 'pointer',
    [breakpoint(theme.breakpoints.sm)]: {
      marginLeft: 30,
    },
    '&:hover': {
      backgroundColor: theme.colors.inputBorder,
    },
  },
}))(MultiFormInput))