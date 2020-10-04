import { useState } from 'react';

function useExportData(currentPage) {
	const [dataCollected, setDataCollected] = useState({});

	function updateData(data) {
		setDataCollected({ ...dataCollected, ...data });
	}

	function exportData() {
		if (currentPage === 3) {
			console.log(dataCollected);
		}
	}

	return [updateData, exportData];
}

export default useExportData;
