const styles = {
  form: {
    fontFamily: 'verdana, helvetica, arial',
    fontSize: '.8em',
    display: 'flex',
    flexDirection:'column',
    border: '1px solid black',
    flex: '1',
    flexWrap: 'wrap'
  },
  controlGroup: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '.8em'
  },
  input: {
    fontSize: '1em'
  },
  colorBlock: {
    flex: 1,
    height: '200px',
    background: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeBtn: {
    display: 'inline-block',
    alignSelf: 'flex-end',
    marginBottom: '1em',
    marginRight: '0'
  },
  valueBlock: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
        valueGroup: {
          flex: '1 1 50',
          display: 'inline-block',
        },
              vals: {
               display: 'flex',
               flexDirection: 'row',
               flexWrap: 'nowrap',
               fontSize: '.7em',
               alignItems: 'center'
             },
                    vallabel: {
                     paddingLeft: '1em',
                     paddingRight: '1em',
                     width: '75px'
                    },
                    valinput: {
                      maxWidth: '50px'
                    }
};

export default styles;
