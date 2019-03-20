module.exports = ({config, mode}) => {
    config.output.publicPath = mode === 'PRODUCTION' ? '/next-assay-pre-approved-study-details-lib/' : '/';
    return config;
  };
  