import React, { useState } from 'react';

function Beneficiaries() {
  const [list, setList] = useState([
    { id: 1, name: 'Rahul', account: '1234567890' },
    { id: 2, name: 'Ananya', account: '9876543210' },
  ]);
  const [newBeneficiary, setNewBeneficiary] = useState({ name: '', account: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);

  const addBeneficiary = () => {
    if (!newBeneficiary.name || !newBeneficiary.account) {
      setError('Name and account number are required.');
      return;
    }

    setIsAdding(true);
    setError(null);
    try {
      // Simulate API call
      setTimeout(() => {
        setList([...list, { ...newBeneficiary, id: Date.now() }]);
        setNewBeneficiary({ name: '', account: '' });
      }, 500);
    } catch (err) {
      setError('Failed to add beneficiary.');
    } finally {
      setIsAdding(false);
    }
  };

  const deleteBeneficiary = (id) => {
    setList(list.filter(b => b.id !== id));
  };

  return (
    <div className="page-container">
      <h1>Manage Beneficiaries</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="beneficiaries-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Account Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((b) => (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.account}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBeneficiary(b.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-beneficiary">
        <input
          type="text"
          placeholder="Name"
          value={newBeneficiary.name}
          onChange={(e) => setNewBeneficiary({ ...newBeneficiary, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Account Number"
          value={newBeneficiary.account}
          onChange={(e) => setNewBeneficiary({ ...newBeneficiary, account: e.target.value })}
        />
        <button
          className="btn btn-primary"
          onClick={addBeneficiary}
          disabled={isAdding}
        >
          {isAdding ? 'Adding...' : 'Add Beneficiary'}
        </button>
      </div>
    </div>
  );
}

export default Beneficiaries;