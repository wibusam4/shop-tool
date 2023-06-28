const badge = {
  role: (value: string) => {
    switch (value) {
      case "USER":
        return <span className="badge badge-secondary badge-sm">{value}</span>;
      case "ADMIN":
        return <span className="badge badge-primary badge-sm">{value}</span>;
    }
  },

  status: (value: string) => {
    switch (value) {
      case "ACTIVE":
        return <span className="badge badge-success badge-sm">{value}</span>;
      case "INACTIVE":
        return <span className="badge badge-error badge-sm">{value}</span>;
    }
  },
};

export default badge;
